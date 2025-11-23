// export async function searchEvents({ keyword, city }) {
//   const params = new URLSearchParams({
//     apikey: "YOUR_TICKETMASTER_API_KEY",
//     keyword,
//     city,
//     size: 20,
//   });

//   const res = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${params}`);
//   if (!res.ok) throw new Error("Failed to fetch events");
//   return (await res.json())._embedded?.events || [];
// }


// Minimal search using keyword + city:

import { TM_API_KEY, TM_BASE_URL } from '../config/constants';

export async function searchEvents({ keyword, city }) {
  const params = new URLSearchParams({
    apikey: TM_API_KEY,
    keyword: keyword || '',
    city: city || '',
    size: '20',
  });

  const url = `${TM_BASE_URL}/events.json?${params.toString()}`;
  console.log("URL :",url)
  const res = await fetch(url);
  console.log("RES :",JSON.stringify(res))

  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }

  const data = await res.json();
  return data._embedded?.events || [];
}
