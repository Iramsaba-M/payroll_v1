// BodyStyle.js

const BodyStyle = {
  bodyContainer: 'flex justify-between bg-white p-4 mt-10',
  image: 'w-3/6', // Adjust width as needed
  content: 'w-3/6 p-6 text-left',
  titleStyles: {
    section1: 'text-black text-left text-lg font-bold', // Left-aligned with left margin
    section2: 'text-black text-left text-lg font-bold ', // Center-aligned by default
    section3: 'text-black text-left text-lg font-bold', // Center-aligned by default
  },
  descriptionStyles: {
    section1: 'text-gray-700 text-left w-[40rem]  mb-6',
    section2: 'text-gray-700 text-left w-[40rem] mb-4 ', // Center-aligned by default
    section3: 'text-gray-700 text-left w-[40rem] mb-4', // Center-aligned by default
  },
  mainHeadingStyle: 'text-4xl font-bold text-justify text-black mb-4 w-[40rem] leading-[3rem] tracking-',
};

const BodyStyle2 = {
  bodyContainer: 'flex justify-between  bg-white p-4 mt-28',
  image: 'w-3/6 float-right absolute right-10 top-90', // Adjust width and add float-right to move the image to the right side
  content: 'w-3/6 p-6 text-left float-left absolute bottom-200px', // Add float-left to move the content to the left side
  titleStyles: {
    section1: 'text-black text-justify text-lg font-bold', // Left-aligned with left margin
    section2: 'text-black text-justify text-lg font-bold ', // Center-aligned by default
    section3: 'text-black text-justify text-lg font-bold', // Center-aligned by default
  },
  descriptionStyles: {
    section1: 'text-gray-700 text-justify w-[40rem] mb-6',
    section2: 'text-gray-700 text-justify w-[40rem] mb-4 ', // Center-aligned by default
    section3: 'text-gray-700 text-justify w-[40rem] mb-4', // Center-aligned by default
  },
  mainHeadingStyle: 'text-4xl font-bold text-left text-black mb-4 w-[40rem] leading-[3rem] ',
};
export { BodyStyle, BodyStyle2 };
