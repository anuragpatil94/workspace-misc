// Customizing Tailwind
module.exports = {
  theme: {
    extend: {
      spacing: {
        "72": "18rem"
      }
    }
  },
  variants: {
    /* Here the order matters, initially active is not part of tailwind.css so we added it. 
    but when we add a new variant to a css style we have to add all of them. 
    Since hover comes before active hover should take precedence
    */
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: []
};
