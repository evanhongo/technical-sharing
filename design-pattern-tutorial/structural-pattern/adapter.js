//Example 1
const companyA = {
    show: () => {
      console.log("Product list of 'A' company");
    },
  };
  
// const companyB = {
//   show: () => {
//     console.log("Product list of 'B' company");
//   },
// };
  
const companyB = {
  getList: () => {
    console.log("Product list of 'B' company");
  },
};
  
const companyB_Adapter = {
  show: () => {
    companyB.getList();
  },
};
  
const renderList = (company) => {
  if (company.show) {
    company.show();
  }
};
  
renderList(companyA);
//renderList(companyB);
renderList(companyB_Adapter);

//Example 2
const getWeatherData = () => [
  {
    name: "ProbabilityOfPrecipitation",
    number: "12%",
  },
  {
    name: "MaximumTemperature",
    number: "30",
  },
  {
    name: "MinimumTemperature",
    number: "20",
  },
];
  
const getNewWeatherData = {
  ProbabilityOfPrecipitation: "12%",
  Temperature: "26",
  Wind: 7,
};
  
const getWeatherDataAdapter = () => {
  const infos = getWeatherData();
  const joinInfos = (name, value) => {
    if (!hasThisItem(name)) {
      infos.push({
        name: name,
        number: value,
      });
    }
  };
  
  const hasThisItem = (name) => {
    return infos.some((info) => info.name === name);
  };
  
  for (let name in getNewWeatherData) {
    joinInfos(name, getNewWeatherData[name]);
  }
  return infos;
};
  
const renderView = (fn) => {
  console.log("Show view");
  console.log(JSON.stringify(fn()));
};
  
renderView(getWeatherDataAdapter);