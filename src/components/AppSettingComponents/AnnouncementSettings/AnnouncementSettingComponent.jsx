import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import './Announcememt.css';
import Announcementcss from "./AnnouncementSettingStyles";
import { FaRegEye, FaSearch } from "react-icons/fa";
import PropTypes from 'prop-types';

const CustomToolbar = ({setPreview}) => (
  <div id="toolbar" className={`custom-toolbar ${Announcementcss.customtoolbar} `}>
    <div className="ml-32"></div>
    {/* <select className="ql-font">
      <option value="sans-serif">Sans Serif</option>
      <option value="serif">Serif</option>
      <option value="monospace">Monospace</option>
    </select> */}
    <select className="ql-header" defaultValue="" onChange={e => e.persist()}>
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>

      <option value=""></option>
    </select>
    <button className="ql-bold "></button>
    <button className="ql-italic "></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <select className="ql-color"></select>
    <select className="ql-background"></select>
    <button className="ql-script" value="sub"></button>
    <button className="ql-script" value="super"></button>
    <button className="ql-blockquote"></button>
    <button className="ql-code-block"></button>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-indent" value="-1"></button>
    <button className="ql-indent" value="+1"></button>
    <button className="ql-direction" value="rtl"></button>
    <select className="ql-align"></select>
    <button className="ql-link"></button>
    <button className="ql-image"></button>
    <button className="ql-video"></button>
    
    <button className="ql-clean"></button>
    <FaRegEye className="preview  ml-1.5 mt-0.5 text-xl cursor-pointer" onClick={() => setPreview(true)} />
  </div>
);
CustomToolbar.propTypes = {
  setPreview: PropTypes.bool,
  
};


const modules = {
  toolbar: {
    container: "#toolbar",
  },
};

const AnnouncementSettingComponent = () => {
  const [value, setValue] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [announcementsearch, setAnnouncementsearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [preview,setPreview]=useState(false)

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await axios.post('http://localhost:3000/AnnouncementSettingComponent', {
        content: value,
      });

      console.log('Content saved:', response.data);
      setValue('');
      alert('Content saved successfully!');
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save content');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3000/AnnouncementSettingComponent');
      setSearchResults(response.data);
      setAnnouncementsearch(true);
    } catch (error) {
      console.error('Error fetching announcements:', error);
      alert('Failed to fetch announcements');
    }
  };

  return (
    <div>
      <div>
        {/* <DynamicSearch /> */}
        <div className="flex items-center rounded-md w-60 border-2 bg-gray-100 px-4 py-1 ml-6 -mt-7" onClick={handleSearch}>
          <FaSearch className="search-icon text-gray-400" />
          <span className="ml-4 text-sm text-gray-500">Search Announcements...</span>
        </div>
        <div>
          {announcementsearch && (
            <div className=" px-7 py-3 mt-2 rounded-md w-[60rem] ml-12">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Search Results</h2>
                <button
                  className="rounded p-2 px-5 bg-red-500 text-white"
                  onClick={() => setAnnouncementsearch(false)}
                >
                  Cancel
                </button>
              </div>
              <div className="mt-4 ">
                {searchResults.map((announcement, index) => (
                  <div key={index} className="p-4 mb-4 bg-button-bg  rounded border shadow">
                    <div dangerouslySetInnerHTML={{ __html: announcement.content }} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {!announcementsearch && (<div className="bg-button-bg px-7 py-3 mt-2 rounded-md w-[60rem] ml-6">
        <div className="editor-container mt-2  bg-white ">

          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            className="editor"
          />
          <CustomToolbar setPreview={setPreview} />

        </div>
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="  rounded p-2 px-5 bg-blue-500 text-white "
          >
            {isSaving ? 'Processing...' : 'Publish'}
          </button>
        </div>

        {preview && (
            <div className="preview mt-4 p-2 bg-white border rounded">
              <h2 className="text-xl font-bold">Preview</h2>
              <div className="preview-content mt-2" dangerouslySetInnerHTML={{ __html: value }} />
              <button
                className="mt-2 rounded p-2 px-5 bg-red-500 text-white"
                onClick={() => setPreview(false)}
              >
                Close Preview
              </button>
            </div>
          )}
      </div>)}
    </div>
  );
};



export default AnnouncementSettingComponent;

