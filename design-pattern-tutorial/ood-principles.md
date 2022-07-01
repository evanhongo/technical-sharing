# SOLID: The Principles of Object Oriented Design

## **Single Responsibility Principle**
> ## A class should have one and only one reason to change, meaning that a class should only have one job

## **Open Closed Principle**
> ## Modules should be open for extension but closed for modification

<br/>

## `Bad`
```ts
class Coder {
  constructor(fullName, language, hobby, education, workplace, position) {
    this.fullName = fullName
    this.language = language
    this.hobby = hobby
    this.education = education
    this.workplace = workplace
    this.position = position
  }
}

class CoderFilter {
  filterByName(coders, fullName) {
    return coders.filter(coder => coder.fullName === fullName)
  }

  filterBySize(coders, language) {
    return coders.filter(coder => coder.language === language)
  }

  filterByHobby(coders, hobby) {
    return coders.filter(coder => coder.hobby === hobby)
  }
}
```

## `Better`
```ts
const filterByProp = (array, propName, value) =>
  array.filter(element => element[propName] === value)
```

## **Liskov Substitution Principle**
> ## If you have a function, that works for a base type, it should work for a derived type

<br/>

## `Bad`
```ts
class Rectangle {
  constructor(width, height) {
    this._width = width
    this._height = height
  }

  get width() {
    return this._width
  }
  get height() {
    return this._height
  }

  set width(value) {
    this._width = value
  }
  set height(value) {
    this._height = value
  }

  getArea() {
    return this._width * this._height
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size)
  }
}
```

## `Better`

```ts
class Rectangle {
  constructor(width, height) {
    this._width = width
    this._height = height
  }

  get width() {
    return this._width
  }

  get height() {
    return this._height
  }

  set width(value) {
    this._width = value
  }

  set height(value) {
    this._height = value
  }

  getArea() {
    return this._width * this._height
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size)
  }

  set width(value) {
    this._width = this._height = value
  }

  set height(value) {
    this._width = this._height = value
  }
}
```

## **Interface Segregation Principle**
> ## A client should never be forced to implement an interface that it doesn’t use 
> ## A client shouldn’t be forced to depend on methods they do not use

<br/>

## `Bad`

```ts
interface IAnimal {
  fly(): void
  swim(): void
}

class Bird implements IAnimal {
  fly(){
    console.log("I can fly!");
  }

  swim(){
    throw Error("I cannot swim!")
  }
}

class Frog implements IAnimal {
  fly(){
    throw Error("I cannot fly!")
  }

  swim(){
    console.log("I can swim!");
  }
}
```

## `Better`

```ts
interface Flyable {
  fly(): void
}

interface Swimable {
  swim(): void
}

class Bird implements Flyable {
  fly(){
    console.log("I can fly!");
  }
}

class Frog implements Swimable {
  swim(){
    console.log("I can swim!");
  }
}

class SuperMan implements Flyable, Swimable {
  fly(){
    console.log("I can fly very high!");
  }

  swim(){
    console.log("I can swim very fast!");
  }
}
```

## **Dependency Inversion Principle**
> ## High-level modules should not import anything from low-level modules. They should both depend on abstractions

<br/>

![img](img/23.jpg)
```ts
class UserService {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
}
```

<br/>

![img](img/24.jpg)
```ts
interface ILogger {
  log(message: string): void;
  error(message: string): void;
}

class MyLogger implements ILogger {
  log(message: string) {
    console.log(message);
  }
  error(message: string) {
    console.error(message);
  }
}

class UserService {
  private logger: ILogger;
  constructor(logger: ILogger) {
    this.logger = logger;
  }
}
```