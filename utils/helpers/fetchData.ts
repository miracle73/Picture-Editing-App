// api.js
const fetchData = async (url: string, method?: Record<string, any>) => {
  // try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json",
     },
      ...method,
    });

  //   if (!response.ok) {
  //     throw new Error(`Failed to fetch data: ${response.statusText}`);
  //   }

  //   return response.json();
  // } catch (error: any) {
  //   console.log(`Error fetching data: ${error.message}`);
  //   // throw new Error(`Error fetching data: ${error.message}`);
  // }
  return response.json();
};

export default fetchData;
