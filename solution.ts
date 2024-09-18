class SomeClass <T extends {runMethodOne: number, runMethodTwo: void | null}> {

  run<K extends keyof T>(method: K, val: T[K]): void{
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