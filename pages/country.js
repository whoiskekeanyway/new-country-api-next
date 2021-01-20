import { withRouter } from "next/router";
import Layout from "../components/Layout.js";

const Country = withRouter((props) => {
  console.log(props);
  let country = JSON.parse(props.router.query.name);
  return (
    <Layout>
      <div>
        <div>
          <h1>{country.name}</h1>
          <br />
          <img className="image" src={country.flag} alt="CountryImage" />
          <br />
          <br />   
         <li> Region: {country.region}</li>
         <li> Sub-Region: {country.subregion}</li>
         <li> Demonym: {country.demonym}</li>
         <li> Nativename: {country.nativeName}</li>
         <li> Timezones: {country.timezones}</li>
         <li> Lat-Lng: {country.latlng}</li>
         <li> AltSpellings: {country.altSpellings}</li>
        </div>

        <style jsx>{`

        li {
          list-style: none;
        
        }
        `}</style>
       
     
        <br />
      </div>
    </Layout>
  );
});

export default Country;

// Written by Ogundele Olalekan
// Task 12 Level 3 Hyperion Dev
