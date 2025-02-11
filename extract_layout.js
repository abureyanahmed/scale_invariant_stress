var graph = {"vertices":[], "edges":[]}
var circles = document.getElementsByTagName("circle")
for(var i=0;i<circles.length;i++)
{
    graph["vertices"].push(circles[i].__data__)
}
var lines = document.getElementsByTagName("line")
for(var i=0;i<lines.length;i++)
{
    graph["edges"].push(lines[i].__data__)
}
console.log(JSON.stringify(graph))
