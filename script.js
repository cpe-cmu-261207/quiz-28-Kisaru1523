async function callApi() {
  const name = document.getElementById("name");
  const resp = await axios.get("https://randomuser.me/api/");
  name.innerHTML = response.data.name;
}

const getBtn = document.getElementById("btn-random");
const getname = document.getElementById("name");
const getrecover = document.getElementById("recover");
const getdeaths = document.getElementById("deaths");
const getupdatedate = document.getElementById("updatedate");
const getdata = () => {
  axios.get("https://randomuser.me/api/").then((response) => {
    console.log(response);
    getname.innerHTML = response.data.name;
    getrecover.innerHTML = response.data.NewRecovered;
    getdeaths.innerHTML = response.data.NewDeaths;
    getupdatedate.innerHTML = response.data.UpdateDate;
  });
};
getBtn.addEventListener("click", getdata);
