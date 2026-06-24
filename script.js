const year = new Date().getFullYear();
document.querySelector('#contact a').textContent = `hello@yourname.com`;

const footer = document.createElement('div');
footer.style.cssText = `
  position: fixed;
  right: 18px;
  bottom: 18px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(7, 17, 31, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #a9b7d3;
  font-size: 12px;
  z-index: 10;
`;
footer.textContent = `© ${year} Saketh`;
document.body.appendChild(footer);
