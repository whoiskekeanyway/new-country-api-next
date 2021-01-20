import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Link from 'next/link'

const Index = (props) => {
  console.log(props);
  return (
    <Layout>
      <div>
        <ul>
          <h1> Countries</h1>
          {props.countries.map((country) => (
            <li key={country.name}>
             <Link as= {`/page/${country.name}`} href={`/country?name=${JSON.stringify(country)}`}>
             <a>{country.name}</a>
             </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

// stored api to const URL
const URL = "https://restcountries.eu/rest/v2/all";

Index.getInitialProps = async function () {
  const res = await fetch(URL);
  const data = await res.json();
  return {
    countries: data,
  };
};

export default Index;
