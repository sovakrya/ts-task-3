class SomeClass <T> {

  run<K extends keyof T>(method: K, val: T[K] | null): void{
      console.log(val)
  }
   
}

const a = new SomeClass<
{
runMethodOne: number;
runMethodTwo: void;
}
>();

a.run("runMethodOne", 1);
a.run("runMethodTwo", null)

a.run("runMethodsdjhfbs", null);