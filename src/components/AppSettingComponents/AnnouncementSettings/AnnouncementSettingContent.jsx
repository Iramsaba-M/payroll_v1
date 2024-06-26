const toolbarOptions = [
  [{ 'font': [] }],
  [{ 'header': [1, 2, false] }],
  ['bold', 'italic', 'underline', 'strike'], 
  [{ 'color': [] }, { 'background': [] }], 
  [{ 'script': 'sub' }, { 'script': 'super' }], 
  ['blockquote', 'code-block'],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }], 
  [{ 'direction': 'rtl' }], 
  [{ 'align': [] }],
  ['link', 'image', 'video'],
  ['clean'] 
];

export const modules = {
  toolbar: toolbarOptions,
};

