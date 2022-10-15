export function renderChart2() {
  const chart2 = lineChart2.current;
  var totalDays = parseInt(document.getElementById("totalDays").value);
  var viewsPerDay = parseInt(document.getElementById("viewsPerDay").value);
  console.log("totalDays" + totalDays);
  console.log("viewsPerDay" + viewsPerDay);

  chart.data = {
    labels: [...Array(totalDays).keys()], //[0,1,2,3,4,5,6....99]
    datasets: [{ data: genareYoutubeGrowthData(viewsPerDay, totalDays) }],
  };
  chart.update();
}
