import {Arraylist} from "./arraylist";

interface Post {
    title : string
}
let arrayList= new Arraylist<Post>();
arrayList.add({title: 'Lap trinh JS'});
arrayList.add({title: 'Lap trinh PHP'});
arrayList.add({title: 'Lap trinh JAVA'});
console.table(arrayList.container)
