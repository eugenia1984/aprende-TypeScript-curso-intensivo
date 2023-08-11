# :star: Advanced Typescript Interview Questions

## 1- What is TypeScript, and how is it different from JavaScript? Provide an example of TypeScript code.

Answer: TypeScript is a superset of JavaScript that adds static typing to the language. It allows developers to define data types for variables, function parameters, and return values, which helps catch errors at compile-time rather than runtime. Here’s an example:

```TypeScript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
const message: string = greet('John');
console.log(message); // Output: "Hello, John!"
```

Further Reading: TypeScript Official Website

---

## 2- Explain the concept of static typing in TypeScript and its benefits.

Answer: Static typing in TypeScript enables specifying data types for variables, function parameters, and return values during development. This helps catch type-related errors early, improving code quality and maintainability. The benefits include better code documentation, enhanced tooling support, and improved developer productivity.

Further Reading: TypeScript Official Handbook — Basic Types

---

## 3- What are interfaces in TypeScript? Provide an example.

Answer: Interfaces in TypeScript define a contract for an object’s structure, specifying the names and types of its properties and methods. They facilitate strong type-checking and enable better code organization. Here’s an example:

```TypeScript
interface Person {
  name: string;
  age: number;
}
function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}
const john: Person = { name: 'John', age: 30 };
const message: string = greet(john);
console.log(message); // Output: "Hello, John! You are 30 years old."
```

Further Reading: TypeScript Official Handbook — Interfaces

---

## 4- What are the benefits of using TypeScript over plain JavaScript?

Answer: TypeScript provides several benefits, including static typing, better code analysis and tooling support, improved code readability, early error detection, easier code refactoring, and enhanced code documentation. It also enables developers to write more maintainable and scalable applications.

Further Reading: TypeScript Official Website — Why TypeScript?

---

## 5- How can you define optional properties in an interface in TypeScript? Provide an example.

Answer: You can define optional properties in an interface by using the ? modifier after the property name. Optional properties may or may not be present in an object that implements the interface. Here's an example:

```TypeScript
interface Person {
  name: string;
  age?: number;
}
const john: Person = { name: 'John' };
const jane: Person = { name: 'Jane', age: 25 };
```

Further Reading: TypeScript Official Handbook — Interfaces

---

## 6- Explain the concept of union types in TypeScript and provide an example.

Answer: Union types allow a variable to have multiple types. It is denoted by using the | symbol between the types. This allows a variable to store values of any of the specified types. Here's an example:

```TypeScript
function printId(id: number | string): void {
  console.log(`ID: ${id}`);
}
printId(123); // Output: "ID: 123"
printId('abc'); // Output: "ID: abc"
```

Further Reading: TypeScript Official Handbook — Union Types

---

## 7- What are type assertions in TypeScript? Provide an example.

Answer: Type assertions in TypeScript allow you to explicitly tell the compiler about the type of a variable when the type cannot be inferred automatically. This is achieved using the <type> or as type syntax. Here's an example:

```TypeScript
let length: any = '5';
let numberLength: number = <number>length; // Using <type> syntax
let stringLength: number = length as number; // Using "as type" syntax
```

Further Reading: TypeScript Official Handbook — Type Assertions

---

## 8- How can you define a function with optional and default parameters in TypeScript? Provide an example.

Answer: You can define a function with optional and default parameters by using the ? modifier for optional parameters and assigning default values to parameters. Here's an example:

```TypeScript
function greet(name: string, message: string = 'Hello', times?: number): void {
  for (let i = 0; i < (times || 1); i++) {
    console.log(`${message}, ${name}!`);
  }
}
greet('John'); // Output: "Hello, John!"
greet('Jane', 'Hi'); // Output: "Hi, Jane!"
greet('Tom', 'Hey', 3); // Output: "Hey, Tom!", "Hey, Tom!", "Hey, Tom!"
```

Further Reading: TypeScript Official Handbook — Functions

---

## 9- What are generics in TypeScript? Provide an example.

Answer: Generics in TypeScript allow you to create reusable components or functions that can work with a variety of types. They enable strong typing while keeping the flexibility of using different data types. Here’s an example:

```TypeScript
function identity<T>(arg: T): T {
  return arg;
}
const result1 = identity<number>(42); // Explicitly specifying the type
const result2 = identity('hello'); // Inferring the type
```

Further Reading: TypeScript Official Handbook — Generics

---

## 10- Explain the “keyof” keyword in TypeScript with an example.

Answer: The “keyof” keyword in TypeScript is a type operator that returns a union of literal types representing the keys of an object. It allows you to perform type-safe operations on object keys. Here’s an example:

```TypeScript
interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // "name" | "age"
```

Further Reading: TypeScript Official Handbook — Index Types

---

## 11- What are type guards in TypeScript, and how do they work? Provide an example.

Answer: Type guards are TypeScript expressions that check the type of a variable at runtime and allow you to perform different actions based on the type. They enable better type inference and provide a way to handle union types more effectively. Here’s an example using the typeof and instanceof type guards:

```TypeScript
function printValue(value: string | number): void {
  if (typeof value === 'string') {
    console.log(`The value is a string: ${value}`);
  } else if (typeof value === 'number') {
    console.log(`The value is a number: ${value}`);
  }
}
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
function greet(person: Person | string): void {
  if (person instanceof Person) {
    console.log(`Hello, ${person.name}!`);
  } else if (typeof person === 'string') {
    console.log(`Hello, ${person}!`);
  }
}
const stringValue: string = 'Hello';
const numberValue: number = 42;

printValue(stringValue); // Output: "The value is a string: Hello"
printValue(numberValue); // Output: "The value is a number: 42"

const john: Person = new Person('John');

greet(john); // Output: "Hello, John!"
greet('Jane'); // Output: "Hello, Jane!"
```

Further Reading: TypeScript Official Handbook — Type Guards

---

## 12- Explain the concept of conditional types in TypeScript. Provide an example.

Answer: Conditional types in TypeScript allow you to create types that depend on a condition. They are used to perform type inference based on the relationships between types. Here’s an example:


```TypeScript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
function add(a: number, b: number): number {
  return a + b;
}
type AddReturnType = ReturnType<typeof add>; // number
```

In this example, ReturnType is a conditional type that infers the return type of a function.

Further Reading: TypeScript Official Handbook — Conditional Types

---

## 13- What are mapped types in TypeScript? Provide an example.

Answer: Mapped types in TypeScript allow you to create new types based on existing ones by mapping properties to new types. They enable you to modify or add properties to existing types easily. Here’s an example:

```TypeScript
interface Person {
  name: string;
  age: number;
}
type PersonWithOptionalProperties = { [K in keyof Person]?: Person[K] };
const john: Person = { name: 'John', age: 30 };
const johnWithOptionalProperties: PersonWithOptionalProperties = { name: 'John' };
```

In this example, PersonWithOptionalProperties is a mapped type that makes all properties of Person optional.

Further Reading: TypeScript Official Handbook — Mapped Types

---

## 14- Explain the “Partial” utility type in TypeScript. Provide an example.

Answer: The “Partial” utility type in TypeScript is used to make all properties of an existing type optional. It allows you to create a new type with optional properties from an existing type. Here’s an example:

```TypeScript
interface Person {
  name: string;
  age: number;
}
type PartialPerson = Partial<Person>;
const john: PartialPerson = { name: 'John' };
```

In this example, PartialPerson is a type with optional properties from the Person interface.

Further Reading: TypeScript Official Handbook — Utility Types

---

## 15- What is the “Readonly” utility type in TypeScript, and how does it work? Provide an example.

Answer: The “Readonly” utility type in TypeScript is used to make all properties of an existing type read-only. It prevents modifying the properties of an object once it is created. Here’s an example:

```TypeScript
interface Person {
  readonly name: string;
  age: number;
}
const john: Readonly<Person> = { name: 'John', age: 30 };
john.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.
```

In this example, the age property can be modified, but the name property is read-only.

Further Reading: TypeScript Official Handbook — Utility Types

---

## 16- What are “key remapping” and “value remapping” in mapped types? Provide examples for each.

Answer: “Key remapping” and “value remapping” are two features of mapped types in TypeScript.

“Key remapping” allows you to change the keys of an existing type using the as keyword. Here's an example:

```TypeScript
interface Person {
  name: string;
  age: number;
}
type MappedPerson = { [K in keyof Person as `new_${K}`]: Person[K] };
const john: MappedPerson = { new_name: 'John', new_age: 30 };
```

In this example, the keys of Person are remapped to have a prefix of "new_".

“Value remapping” allows you to change the values of an existing type using conditional types. Here’s an example:

```TypeScript
type ValueRemapped<T> = T extends 'a' ? 'x' : T extends 'b' ? 'y' : 'z';
type Result = ValueRemapped<'a' | 'b' | 'c'>; // Result: 'x' | 'y' | 'z'
In this example, the values ‘a’, ‘b’, and ‘c’ are remapped to ‘x’, ‘y’, and ‘z’, respectively.
```

Further Reading: TypeScript Official Handbook — Mapped Types

---

## 17- Explain the “Pick” utility type in TypeScript. Provide an example.

Answer: The “Pick” utility type in TypeScript allows you to create a new type by selecting specific properties from an existing type. It helps in creating subsets of existing types. Here’s an example:

```TypeScript
interface Person {
  name: string;
  age: number;
  city: string;
}
type PersonInfo = Pick<Person, 'name' | 'age'>;
const john: PersonInfo = { name: 'John', age: 30 };
```

In this example, PersonInfo is a type containing only the 'name' and 'age' properties from the Person interface.

Further Reading: TypeScript Official Handbook — Utility Types

---

## 18- What is the “Omit” utility type in TypeScript, and how does it work? Provide an example.

Answer: The “Omit” utility type in TypeScript allows you to create a new type by excluding specific properties from an existing type. It helps in creating types with certain properties removed. Here’s an example:

```TypeScript
interface Person {
  name: string;
  age: number;
  city: string;
}
type PersonWithoutCity = Omit<Person, 'city'>;
const john: PersonWithoutCity = { name: 'John', age: 30 };
```

In this example, PersonWithoutCity is a type that excludes the 'city' property from the Person interface.

Further Reading: TypeScript Official Handbook — Utility Types

---

## 19- What are “conditional mapped types” in TypeScript? Provide an example.

Answer: Conditional mapped types combine conditional types and mapped types to perform type transformations based on conditions. They allow you to create dynamic types based on the properties of an existing type. Here’s an example:

```TypeScript
interface Person {
  name: string;
  age: number;
}
type MappedConditional<T> = {
  [K in keyof T]: T[K] extends number ? string : T[K];
};
const john: MappedConditional<Person> = { name: 'John', age: '30' };
```

In this example, MappedConditional is a conditional mapped type that converts number properties of Person to strings.

Further Reading: TypeScript Official Handbook — Mapped Types

---

## 20- What is the purpose of the “keyof” and “in” keywords in conditional types? Provide an example.

Answer: The “keyof” keyword in conditional types is used to obtain the union of keys of an object type. It allows you to work with the keys of an object in a type-safe manner. The “in” keyword checks if a property key exists in the union of keys obtained from “keyof”. Here’s an example:

```TypeScript
type CheckKey<T, K extends keyof T> = K extends 'name' ? true : false;
interface Person {
  name: string;
  age: number;
}
type IsNameKey = CheckKey<Person, 'name'>; // Result: true
type IsCityKey = CheckKey<Person, 'city'>; // Result: false
```

In this example, CheckKey is a conditional type that checks if a provided key is 'name'.

Further Reading: TypeScript Official Handbook — keyof Type Operator, TypeScript Official Handbook — in Operator

---

## 21- Explain the “Exclude” utility type in TypeScript. Provide an example.

Answer: The “Exclude” utility type in TypeScript allows you to create a new type by excluding certain types from a union. It helps in creating a subset of a union type. Here’s an example:

```TypeScript
type Color = 'red' | 'green' | 'blue';
type PrimaryColors = Exclude<Color, 'green' | 'blue'>;
const primary: PrimaryColors = 'red'; // Okay
const invalidColor: PrimaryColors = 'green'; // Error: Type '"green"' is not assignable to type 'PrimaryColors'.
```

In this example, PrimaryColors is a type that excludes the 'green' and 'blue' colors from the Color union.

Further Reading: TypeScript Official Handbook — Utility Types

---

## 22- What are “template literal types” in TypeScript? Provide an example.

Answer: Template literal types in TypeScript allow you to manipulate strings in types by using template literal syntax. They provide a way to create complex types based on string patterns. Here’s an example:

```TypeScript
type Greeting<T extends string> = `Hello, ${T}!`;
type GreetJohn = Greeting<'John'>; // Result: "Hello, John!"
type GreetJane = Greeting<'Jane'>; // Result: "Hello, Jane!"
```

In this example, Greeting is a template literal type that generates greetings based on the provided name.

Further Reading: TypeScript Official Handbook — Template Literal Types

---

## 23- Explain the “infer” keyword in conditional types. Provide an example.

Answer: The “infer” keyword in conditional types is used to infer a type from another type within a conditional type. It allows you to capture and assign a type to a type variable. Here’s an example:

```TypeScript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
function add(a: number, b: number): number {
  return a + b;
}
type AddReturnType = ReturnType<typeof add>; // Result: number
```

In this example, ReturnType is a conditional type that infers the return type of a function using the "infer" keyword.

Further Reading: TypeScript Official Handbook — Conditional Types

---

## 24- What is the “keyof” and “typeof” keywords used for in TypeScript? Provide examples for each.

Answer: The “keyof” keyword is used to obtain the union of keys of an object type, and the “typeof” keyword is used to obtain the type of a value. Here are examples for each:

```TypeScript
interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // Result: "name" | "age"
const john = { name: 'John', age: 30 };
type JohnType = typeof john; // Result: { name: string, age: number }
```

In the first example, PersonKeys is a type that represents the union of keys of the Person interface. In the second example, JohnType is a type that represents the type of the john object.

Further Reading: TypeScript Official Handbook — keyof Type Operator, TypeScript Official Handbook — typeof Type Operator

---

## 25- What are “const assertions” in TypeScript? Provide an example.

Answer: “Const assertions” in TypeScript allow you to inform the compiler that a specific literal expression should be treated as a literal rather than a widened type. Here’s an example:

```TypeScript
function getConfig() {
  const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
  } as const;
  return config;
}
const config = getConfig();
// config is inferred as:
// {
//   readonly apiUrl: "https://api.example.com";
//   readonly timeout: 5000;
// }
```

In this example, the config object is treated as a constant object with readonly properties due to the as const assertion.

Further Reading: TypeScript Official Handbook — Literal Type Widening

---

## 26- What are “private” and “protected” access modifiers in TypeScript? Provide examples for each.

Answer: “Private” and “protected” are access modifiers in TypeScript used to control the visibility and accessibility of class members.

```TypeScript
class Person {
  private name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
  }
}
class Employee extends Person {
  private salary: number;
  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
  showSalary() {
    console.log(`My salary is ${this.salary}.`);
  }
}
const john = new Person('John', 30);
console.log(john.name); // Error: Property 'name' is private and only accessible within class 'Person'.
console.log(john.age); // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses.
const employee = new Employee('Jane', 25, 50000);
employee.greet(); // Output: "Hello, my name is Jane, and I am 25 years old."
employee.showSalary(); // Output: "My salary is 50000."
console.log(employee.salary); // Error: Property 'salary' is private and only accessible within class 'Employee'.
```

In this example, the name property has a "private" access modifier, and the age property has a "protected" access modifier. The salary property is private to the Employee class.

Further Reading: TypeScript Official Handbook — Classes

---

## 27- Explain the “keyof T extends K” construct in TypeScript conditional types. Provide an example.

Answer: The “keyof T extends K” construct in TypeScript conditional types is used to filter keys of an object type based on a specified condition using the “extends” keyword. Here’s an example:

```TypeScript
type FilterProperties<T, K> = {
  [P in keyof T as T[P] extends K ? P : never]: T[P];
};
interface Person {
  name: string;
  age: number;
  email: string;
}
type StringProperties = FilterProperties<Person, string>;
// Result: {
//   name: string;
//   email: string;
// }
type NumberProperties = FilterProperties<Person, number>;
// Result: {
//   age: number;
// }
```

In this example, FilterProperties is a conditional mapped type that filters properties of Person based on their value types.

Further Reading: TypeScript Official Handbook — Conditional Types

---

## 28- What are “mixins” in TypeScript? Provide an example.

Answer: Mixins in TypeScript allow you to add behavior to a class by combining it with one or more other classes. It enables code reuse and composition. Here’s an example of a mixin:


```TypeScript
class Printable {
  print() {
    console.log(this.toString());
  }
}
class MyObject {
  constructor(private name: string) {}
  toString() {
    return `Object: ${this.name}`;
  }
}
interface MyObject extends Printable {}
const myObj = new MyObject('example');
myObj.print(); // Output: "Object: example"
```

In this example, the Printable class acts as a mixin that adds the print method to the MyObject class.

Further Reading: TypeScript Official Handbook — Mixins

---

##  29- Explain the concept of “declaration merging” in TypeScript. Provide an example.

Answer: “Declaration merging” in TypeScript is a process in which the compiler merges multiple declarations for the same entity into a single definition. It allows you to extend interfaces, functions, classes, and enums.

```TypeScript
interface Person {
  name: string;
}
interface Person {
  age: number;
}
const john: Person = { name: 'John', age: 30 };
console.log(john); // Output: { name: 'John', age: 30 }
```

In this example, the compiler merges the two Person interfaces into a single definition, allowing john to have both name and age properties.

Further Reading: TypeScript Official Handbook — Declaration Merging

---

## 30- What is the “noUncheckedIndexedAccess” compiler option in TypeScript, and why is it useful? Provide an example.

Answer: The “noUncheckedIndexedAccess” compiler option in TypeScript is used to catch potential undefined or null values when accessing properties using an index. It helps improve code safety by avoiding runtime errors.

```JSON
// tsconfig.json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true
  }
}
```

Here’s an example:

```TypeScript
const data: { [key: string]: number } = {
  apple: 1,
  banana: 2,
};
const fruit = 'pear';
const count = data[fruit]; // Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ apple: number; banana: number; }'.
```

In this example, enabling “noUncheckedIndexedAccess” would raise an error since data[fruit] might be undefined or null.

Further Reading: TypeScript Compiler Options

---

## 31- What are “decorators” in TypeScript? Provide an example.

Answer: Decorators are a TypeScript feature that allows you to modify the behavior of classes, methods, or properties. They are declared using the @decoratorName syntax and executed at runtime. Here's an example of a simple class decorator:

```TypeScript
function MyClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = 'decorated property';
    hello = 'overridden';
  };
}
@MyClassDecorator
class MyClass {
  hello: string;
  constructor() {
    this.hello = 'world';
  }
}
const myClassInstance = new MyClass();
console.log(myClassInstance.hello); // Output: "overridden"
console.log((myClassInstance as any).newProperty); // Output: "decorated property"
```

In this example, the MyClassDecorator function is a class decorator that modifies the behavior of the MyClass class.

Further Reading: TypeScript Official Handbook — Decorators

---

## 32- Explain the “abstract” keyword in TypeScript. Provide an example.

Answer: The “abstract” keyword in TypeScript is used to define abstract classes and methods. Abstract classes cannot be instantiated directly; they can only be extended. Abstract methods do not have an implementation in the abstract class and must be implemented in derived classes. Here’s an example:

```TypeScript
abstract class Shape {
  abstract area(): number;
}
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
const circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483
```

In this example, the Shape class is an abstract class with an abstract method area(). The Circle class extends the Shape class and implements the area() method.

Further Reading: TypeScript Official Handbook — Abstract Classes

---

## 33- What are “conditional types” in TypeScript, and why are they useful? Provide an example.

Answer: Conditional types in TypeScript allow you to perform type transformations based on conditions. They enable you to create dynamic types that depend on the relationships between other types. Here’s an example:

```TypeScript
type IsString<T> = T extends string ? true : false;
type CheckString = IsString<string>; // Result: true
type CheckNumber = IsString<number>; // Result: false
```

In this example, the IsString conditional type checks if the provided type is a string.

Conditional types are useful when you want to create type-safe mappings or filters based on the types of other values.

Further Reading: TypeScript Official Handbook — Conditional Types

---

## 34- What is the “readonly” modifier for properties in TypeScript? Provide an example.

Answer: The “readonly” modifier in TypeScript is used to make properties of a class or interface read-only, meaning their values cannot be changed once set. Here’s an example:

```TypeScript
class Person {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const john = new Person('John');
console.log(john.name); // Output: "John"
john.name = 'Jane'; // Error: Cannot assign to 'name' because it is a read-only property.
```

In this example, the name property of the Person class is marked as read-only.

Further Reading: TypeScript Official Handbook — Classes

---

## 35- Explain the “as const” assertion in TypeScript. Provide an example.

Answer: The “as const” assertion in TypeScript is used to infer literal types for arrays and objects. It tells the compiler that the value should be treated as a constant and not be widened to its base type. Here’s an example:

```TypeScript
const fruits = ['apple', 'banana'] as const;
const person = {
  name: 'John',
  age: 30,
} as const;
// The type of fruits is: readonly ["apple", "banana"]
// The type of person is: {
//   readonly name: "John";
//   readonly age: 30;
// }
```

In this example, the fruits array and person object have their types inferred as readonly tuples and objects, respectively.

Further Reading: TypeScript Official Handbook — Literal Types

---

## 36- What are “module augmentation” in TypeScript? Provide an example.

Answer: Module augmentation in TypeScript allows you to add new declarations or extend existing declarations in external modules. It is useful when you want to add functionality to third-party libraries. Here’s an example:

```TypeScript
// Original module in a third-party library
// external-library.d.ts
declare module 'external-library' {
  export function greet(name: string): string;
}
// Augment the module
// augmentations.d.ts
declare module 'external-library' {
  export function goodbye(name: string): string;
}
// Usage
import { greet, goodbye } from 'external-library';
console.log(greet('John')); // Output: "Hello, John!"
console.log(goodbye('John')); // Output: "Goodbye, John!"
```

In this example, we augment the ‘external-library’ module by adding the goodbye function.

Further Reading: TypeScript Official Handbook — Module Augmentation

---

## 37- What is the “keyof” operator used for in TypeScript? Provide an example.

Answer: The “keyof” operator in TypeScript is used to obtain the union of keys of an object type. It allows you to work with the keys of an object in a type-safe manner. Here’s an example:

```TypeScript
interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // Result: "name" | "age"
```

In this example, PersonKeys is a type that represents the union of keys of the Person interface.

Further Reading: TypeScript Official Handbook — keyof Type Operator

---

## 38- What is the purpose of the “typeof” operator in TypeScript? Provide an example.

Answer: The “typeof” operator in TypeScript is used to obtain the type of a value or a variable at compile-time. It is useful when you want to perform type-checking based on the type of a variable. Here’s an example:

```TypeScript
const name = 'John';
type NameType = typeof name; // Result: string
function printType(value: any): void {
  const type = typeof value;
  console.log(`The type of ${value} is ${type}.`);
}
printType(42); // Output: "The type of 42 is number."
printType(true); // Output: "The type of true is boolean."
printType('Hello'); // Output: "The type of Hello is string."
```

In this example, the NameType type is inferred as string because the name variable has a string value.

Further Reading: TypeScript Official Handbook — typeof Type Operator

---

## 39- What are “index signatures” in TypeScript interfaces? Provide an example.

Answer: Index signatures in TypeScript interfaces allow you to define the types of properties based on their names. They are used to define objects with dynamic property names. Here’s an example:

```TypeScript
interface Dictionary {
  [key: string]: number;
}
const data: Dictionary = {
  apple: 1,
  banana: 2,
};
const value = data['banana'];
console.log(value); // Output: 2
```

In this example, the Dictionary interface allows you to define objects with string keys and number values.

Further Reading: TypeScript Official Handbook — Indexable Types

---

## 40- What are “type predicates” in TypeScript? Provide an example.

Answer: Type predicates in TypeScript are used to narrow down the type of a value within a conditional block. They provide a way to perform type checks and get more specific types. Here’s an example:

```TypeScript
function isString(value: any): value is string {
  return typeof value === 'string';
}
function printLength(value: string | number): void {
  if (isString(value)) {
    console.log(`The length of the string is ${value.length}.`);
  } else {
    console.log(`The value is a number: ${value}`);
  }
}
printLength('Hello'); // Output: "The length of the string is 5."
printLength(42); // Output: "The value is a number: 42."
```

In this example, the isString function is a type predicate that checks if the value is a string.

---

-> External link: [TypeScript Official Handbook — User-Defined Type Guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards)

---
