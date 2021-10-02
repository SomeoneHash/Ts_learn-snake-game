class Dog {
  name:string;
  age:number;

  // constructor 被称为构造函数
  // 构造函数会在对象创建时调用
  constructor(name:string,age:number) {
    // 在实例方法中，this就表示当前的实例
    // 在构造函数中当前对象就是当前创建的那个对象
    // 可以通过this向新建的独享对象中添加属性
    this.name = name;
    this.age = age
  }
  bark() {
    alert('汪汪汪~');
    console.log(this.name);
    
  }
}

const dog = new Dog('小黑', 2);
const dog2 = new Dog('小白', 1);

// const dog3 = new Dog();
// const dog4 = new Dog();

console.log(dog);
console.log(dog2);
// console.log(dog3);
// console.log(dog4);

dog.bark();
