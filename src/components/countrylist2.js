class CountryList2 {
    constructor() {
      this.regions = this.regions.bind(this);
      this.countries = this.countries.bind(this);
    }
    regions = () => {
      let res = [
        { key: "Latam", value: "Latam", text: "Latam" },
        { key: "Nordics", value: "Nordics", text: "Nordics" },
        { key: "Asia", value: "Asia", text: "Asia" },
        { key: "Mena", value: "Mena", text: "Mena" },
        { key: "CEE", value: "CEE", text: "CEE" },
      ];
      return res;
    };
   
    countries = () => { 
        let names =      [
              "Saudi Arabia",
              "Singapore",
              "Bahrain",
              "Kuwait",
              "Malaysia",
              "Hungary",
              "Germany",
              "UAE",
              "Qatar",
              "Turkey",
              'Egypt'
            ];
            names.sort((a, b) => a.localeCompare(b))
        let res = [];
        names.map((name) =>
          res.push({
            key: name,
            value: name,
            text: name,
          })
        );
        return res;
      };

  }
  export default CountryList2;
  