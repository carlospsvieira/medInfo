const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_API_KEY,
    "X-RapidAPI-Host": "drug-info-and-price-history.p.rapidapi.com",
  },
};

export default async function getMedicationByName(medName) {
  try {
    const request = await fetch(
      `https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=${medName}`,
      options
    );
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
    return;
  }
}
