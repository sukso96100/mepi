let searchResults = [];

function search(){
  switch(document.getElementById('searchby').value){
    case 'Name':
      console.log('Search by Name');
      searchResults = pluginData.filter(item=>{
        return item.Name.includes(document.getElementById('keyword').value);
      });
      console.log(searchResults);
      showResults(searchResults);
      break;
    case 'Description':
      console.log('Search by Description');
      searchResults = pluginData.filter(item=>{
        return item.Description.includes(document.getElementById('keyword').value);
      });
      console.log(searchResults);
      showResults(searchResults);
      break;
    case 'Tags':
      console.log('Search by Tags');
      searchResults = pluginData.filter(item=>{
        return item.Tags.includes(document.getElementById('keyword').value);
      });
      console.log(searchResults);
      showResults(searchResults);
      break;
  }
}

function showResults(results){
  let table = document.getElementById('results');
  table.innerHTML = '';
  results.forEach(item=>{
    table.innerHTML += `<tr><td class="results sum button"
      onclick="document.getElementById('${item.Name}').hidden = !document.getElementById('${item.Name}').hidden">
      <p>${item.Name} ${item.Versions[0].Version} - ${item.Description}</p></td>
      <td class="results button"
        onclick="document.getElementById('${item.Name}').hidden = !document.getElementById('${item.Name}').hidden">
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </td></tr>
    <tr hidden="true" id="${item.Name}">
      <td colspan="2" class="details">
        <p><i class="fa fa-tags" aria-hidden="true"></i> ${item.Tags.toString()}</p>
        <p><b>Require : </b>${JSON.stringify(item.Versions[0].Require)}</p>
        <p>To install this plugin, open micro from your CLI,
        press [Crtl + E] then run the command line below.
        Once you are done, restart micro.</p>
        <p class="cmdline">plugin install ${item.Name}</p>
      </td>
    </tr>`
  });
}
