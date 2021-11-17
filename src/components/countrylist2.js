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
    countriesold = (region) => {
      let names = [];
      switch (region) {
        case "Latam":
          names = [
            "Argentina",
            "Bolivia",
            "Chile",
            "Dominican Republic",
            "Panama",
            "Paraguay",
            "Uruguay",
            "Venezuela",
          ];
          break;
        case "Mena":
          names = [
            "Bahrain",
            "Egypt",
            "Jordan",
            "Kuwait",
            "Oman",
            "Qatar",
            "Saudi Arabia",
            "Turkey",
            "UAE",
          ];
          break;
        case "Asia":
          names = [
            "Bangladesh",
            "Cambodia",
            "Hong Kong",
            "Japan",
            "Korea",
            "Laos",
            "Malaysia",
            "Myanmar",
            "Pakistan",
            "Philippines",
            "Singapore",
            "Taiwan",
            "Thailand",
          ];
          break;
        case "Nordics":
          names = [
            "Finland",
            "Norway",
            "Sweden",
          ];
          break;
        case "CEE":
          names = [
            "Bosnia and Herzegovina",
            "Croatia",
            "Cyprus",
            "Montenegro",
            "Serbia",
            "Austria",
            "Bulgaria",
            "Czech Republic",
            "Greece",
            "Hungary",
            "Romania",
  
          ];
          break;
        default:
          names =[]
          
      }
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
    countries = () => {
       
       
        let names =      [
              "Argentina",
              "Bolivia",
              "Chile",
              "Panama",
              "Paraguay",
              "Uruguay",
              "Venezuela",
            ];
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
  