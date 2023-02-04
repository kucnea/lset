export function sayHello(){
    alert("hi");
    console.log("hi");
}
export function sayBye(){
    alert("bye");
    console.log("bye");
}
// 하나는 default가 돼야하고( 메소드 각자 쓸때, 전체쓸때는 괜찮. ), 얘는 함수명이아니라 default로 export 됨.
// export default function method(){
//     alert("bye");
//     console.log("bye");
// }