import React, { useEffect, useState } from 'react'

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=82de51691bb5e32cbfab69ec0f312f1b`;
      const response = await fetch(url);
      const users = await response.json();
      setCity(users.main);
    }
    fetchData();
  }, [search])

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input className="inputField"
            value={search}
            type="text"
            onChange={(event) => {
              setSearch(event.target.value)
            }} />
        </div>

        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>{search}
              </h2>
              <p id="date"> </p>
              <h1 className="temp">
                {city.temp}°C
            </h1>
              <h3 className="tempmin_max">Min:{city.temp_min}°C | Max:{city.temp_max}°C </h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>

  );
}

export default App;
