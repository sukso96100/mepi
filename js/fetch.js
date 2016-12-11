let pluginData;

function initPage(){
  fetchData();
}

function fetchData(){
  fetch('https://raw.githubusercontent.com/micro-editor/plugin-channel/master/channel.json')
  .then(response=>response.text()
    .then(text=>{
      // Remove Comments
      let rawdata = text.replace(/[/s][\/]\B.+/g, "");
      console.log(rawdata);
      // Parse Data
      const channel = JSON.parse(rawdata);
      pluginData = [];
      channel.forEach(item=>{
        fetch(item)
        .then(response=>response.json()
          .then(json=>{
            pluginData.push(json[0]);
            console.log(json[0]);
          }));
      });
    })
  );
}
