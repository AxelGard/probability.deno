import { assert } from "jsr:@std/assert";
import {probability} from "../probability/probability.ts"

Deno.test("works correctly", () => {
    assert(probability(1) === false, "failed on 1");
    assert(probability(1.0) === false, "failed on 1.0");
    assert(probability(0) === true, "failed on 0");
    assert(probability(0.0) === true, "failed on 0.0");
    let n = 1_000_000; 
    let check = 0;
    let p = 0.5;
    for (let i = 0; i <= n; i++) {
       check += +!!probability(p);
    }
    let pression = 0.1;
    assert((check >= n*(p-pression) && check <=  n*(p+pression)),"probablity is not precise enough");
});

