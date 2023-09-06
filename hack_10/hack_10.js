/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];

foo.name = foo.name.charAt(0).toUpperCase() + foo.name.slice(1);
foo.roles = [foo.roles[0].toUpperCase(), roleSuperUser, roleUser];
foo.skills[1] = foo.skills[1].toUpperCase();
foo.skills[1] = foo.skills[1].toUpperCase();
delete foo.alias;

levels[0].LEVEL = 'L1';
levels[1].LEVEL = 'L2';
levels[2].LEVEL = 'L3';

foo.levels = levels



let result = {...foo};
console.log(result);


//export result
module.exports = result; 