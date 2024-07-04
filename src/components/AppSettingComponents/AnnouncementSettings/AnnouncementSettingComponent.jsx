import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import './Announcememt.css';
import Announcementcss from "./AnnouncementSettingStyles";
import { FaRegEye, FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import PropTypes from 'prop-types';
import ModalComponent from "../../form/Formfields/modal/ModalComponent";
import { ModalAnnouncementconfig } from "../../form/Formfields/modal/ModalAnnouncementconfig";
import { IoSettingsOutline } from "react-icons/io5";
import DateComponent from "../../form/Formfields/date/DateComponent";
import OptionsComponent from "../../form/Formfields/options/OptionsComponent";
import { settingsModelconfig } from "./AnnouncementSettingContent";
import TextStyle from "../../form/Formfields/text/TextStyle";
import SettingsComponent from "./SettingsComponent";

const CustomToolbar = ({ setIsModalOpen, setModalsetting }) => (
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
    <FaRegEye className="preview  ml-1.5 mt-0.5 text-xl cursor-pointer" onClick={() => setIsModalOpen(true)} />
    <IoMdSettings className="preview  ml-1.5 mt-0.5 text-xl cursor-pointer" onClick={() => setModalsetting(true)} />
  </div>
);
CustomToolbar.propTypes = {
  setIsModalOpen: PropTypes.bool,
  setModalsetting: PropTypes.bool,

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
  const [preview, setPreview] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Modalsetting, setModalsetting] = useState(false)
  const [settings, setSettings] = useState({})

  const handleSave = async () => {
    setIsSaving(true);
    const form = {
      'value': value, 'settings': settings
    }
    console.log('val2', form);
    try {
      const response = await axios.post('http://localhost:3000/AnnouncementSettingComponent',
        form
      );

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

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalsetting(false);
  };
  console.log('value', value, settings);
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
                    <div className="quill editor ql-container">
                        <div class="ql-editor" data-gramm="false" >
                          <div  dangerouslySetInnerHTML={{ __html: announcement.value }} />
                        </div>
                    </div>
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
          <CustomToolbar setIsModalOpen={setIsModalOpen} setModalsetting={setModalsetting} />

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
        <div>


        </div>


        {/* {preview && (
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
          )} */}
      </div >)}
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        config={ModalAnnouncementconfig}
        component={(
          <div className=" preview mt-4 p-2 bg-white border rounded">
            <h1 className=" font-bold">Preview</h1>
            <div className="quill editor">
              <div className="ql-container ">
                <div class="ql-editor" data-gramm="false" >
                  <div className="" dangerouslySetInnerHTML={{ __html: value }} />
                </div>
              </div>
            </div>
          </div>
        )}
      />

      <ModalComponent
        isOpen={Modalsetting}
        onClose={handleCloseModal}
        config={ModalAnnouncementconfig}
        component={
          <SettingsComponent Settingvalue={setSettings} />
        }
      />
    </div >
  );
};



export default AnnouncementSettingComponent;

