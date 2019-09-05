// const Nightmare = require('nightmare');
// const nightmare = Nightmare({ show: false });

// export const webScraper = async (link) => {
//   nightmare
//     .goto(link)
//     .wait('.desc_text_paragraph ')
//     .evaluate(() => {
//       var jobDescription = document.querySelector('.desc_text_paragraph');
//       return jobDescription.innerHTML
//     })
//     .end()
//     .then((result) => {
//       return result
//     })
//     .catch((error) => {
//       console.error('Search failed:', error);
//     });
// }