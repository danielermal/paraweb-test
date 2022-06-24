export const getCardsRequest = async () => {
  return await fetch(
    `https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );
};

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}
