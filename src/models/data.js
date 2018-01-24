import m from "mithril";

const ROOT = `http://www.diduapp.com/m`

export var Data = {
  Projects:[],
  Tasks:[],
  GetProjects:function(){
    return m
			.request({
				method: "GET",
				url: `${ROOT}/projects.php`,
			})
			.then(function(response) {
				console.table("projects response: ", response);
        Data.Projects = response;
			});
  },
  GetTasks:function(project_id, project_type){
    return m
      .request({
        method: "GET",
        url: `${ROOT}/tasks.php?project_id=${project_id}&project_type=${project_type}`,
      })
      .then(function(response) {
        console.table("projects response: ", response);
        Data.Tasks = response;
      });
  }
};
