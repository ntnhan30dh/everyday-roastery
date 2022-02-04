class CountryList2 {
    constructor() {
      this.countries = this.countries.bind(this);
    }
   
   
    countries = () => { 
        let names =      [
              "Saudi Arabia",
              "Singapore",
              "Bahrain",
              "Kuwait",
              "Malaysia",
              "Hungary",
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


    countriesName = () => { 
      return     [
            "Saudi Arabia",
            "Singapore",
            "Bahrain",
            "Kuwait",
            "Malaysia",
            "Hungary",
            "UAE",
            "Qatar",
            "Turkey",
            'Egypt'
          ];
       
    };

  }
  export default CountryList2;
  