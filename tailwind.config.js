tailwind.config = {
    theme: {
      extend: {
        colors: {
          'header': '#282828',
          'color': '#FFFFFF',
          'after': '#fac404',
          'navbar': '#F40404',
          'btn': 'linear-gradient(rgba(255, 255, 255, 0.5))',
          'footerbg': '#1F1F1F',

        },

        maxWidth: {
          'container': '1144px',
        },

        fontSize: {
          
          'header-font': '12px',
          'font-awesome': '15px',
          
        },
        
        backgroundImage: {

          'bannerbg': " linear-gradient(rgba(0, 0, 0, 0.542),rgba(0, 0, 0, 0.6)) ,url('./images/Group 5.jpg')",

          // service section

          'servicebg': " linear-gradient(rgba(0, 0, 0, 0.542),rgba(0, 0, 0, 0.6)) ,url('./images/service_1.png')",
          'servicebg2': " linear-gradient(rgba(0, 0, 0, 0.542),rgba(0, 0, 0, 0.6)) ,url('./images/service_2.png')",
          'servicebg3': " linear-gradient(rgba(0, 0, 0, 0.542),rgba(0, 0, 0, 0.6)) ,url('./images/service_3.png')",

        //  blog section

        'blogbg': " linear-gradient(rgba(0, 0, 0, 0.542),rgba(0, 0, 0, 0.6)) ,url('./images/unsplash_1.png')",

        'blogbg2': " linear-gradient(rgba(0, 0, 0, 0.542),rgba(0, 0, 0, 0.6)) ,url('./images/unsplash_2.png')",

        'blogbg3': " linear-gradient(rgba(0, 0, 0, 0.542),rgba(0, 0, 0, 0.6)) ,url('./images/unsplash_3.png')",

        },
        fontFamily: {

          'poppins': "'Poppins', sans-serif",
          
        },
      }
    }
  }