const whatsappMessage = `
Join your friend. Thank You.
`;

const links = [
  {
    name: 'Facebook',
    url: `https://www.facebook.com/sharer/sharer.php?u=${window.location}`,
  },
  {
    name: 'Whatsapp',
    url: `https://api.whatsapp.com/send?text=${encodeURI(whatsappMessage)}`,
  },
  {
    name: 'Twitter',
    url: `https://twitter.com/`,
  },
  {
    name: 'Instagram',
    url: `https://instagram.com`,
  },
  {
    name: 'Linkedin',
    url: `https://linkedin.com`,
  },
];

export default links;
