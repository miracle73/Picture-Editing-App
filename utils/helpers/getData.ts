// api.js
const getData = async (url: string, method?: Record<string, any>,  ) => {
    // try {
      const response = await fetch(url, {
        headers: { "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Ikw1VlJzNUFTUU5EREhvblA1c2dDWHd0cVB4dHg3cSJ9.IsSv_OC1af8g-jYKHexHgkkP8O1-pl8dohnzqHG6-8Y`
       },
        ...method,
      });

    return response.json();
  };
  
  export default getData;
  