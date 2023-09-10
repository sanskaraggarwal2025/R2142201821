import React, { useEffect } from 'react'
import axios from 'axios'
const GetTrains = () => {
 const [data, setData] = useState([]);
 useEffect(() => {
  const accessToken = 'e1rAjhHxtKFuKLIZIaIroO?PLtfU/80TwAOvVb?3rYDfv6T4VkaQyyukwOdD35x5JaAbEIAT7-ygoPe1JUZfmuYztt3U8AHJbjOkQw9wBJy078-b/46UzlN9Jz=Hsfts1BPQ7Z-Xo7sogF7l9I5e?O3vmG6!FLk-CeRkSQBT4ZAj=R7bIgG9QGHS8Jx6vy9Os8vItychD/YcnakZ?UeIJXXsY7m4nartWtfP5j?60g6Zk6jFqLwKlFY6=v64Rfam';
  const url = 'http://20.244.56.144:80/train/trains';

  axios.get(url, {
   headers: {
    Authorization: `Bearer ${accessToken}`,
   },
  })
   .then(response => {
    setData(response.data);
   })
   .catch(error => {
    setError(error);
   });
 }, []);
 return (
  <>
   {
    data.map((itr) => (
     <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
       <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>

       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {itr.map((train) => (
         <div key={train.id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
           <img
            src={train.img}
            alt={train.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
           />
          </div>
          <div className="mt-4 flex justify-between">
           <div>
            <h3 className="text-sm text-gray-700">
             <a href={train.link}>
              <span aria-hidden="true" className="absolute inset-0" />
              {train.name}
             </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{train.time}</p>
           </div>
           <p className="text-sm font-medium text-gray-900">{train.fare}</p>
          </div>
         </div>
        ))}
       </div>
      </div>
     </div>
    ))}

  </>
 )
}

export default GetTrains