import { assert, assertEquals } from "jsr:@std/assert";
import {probability} from "./probability"

Deno.test("works correctly", () => {
    assert(probability(1) === false, "failed on 1");
    assert(probability(1.0) === false, "failed on 1.0");
    assert(probability(0) === true, "failed on 0");
    assert(probability(0.0) === true, "failed on 0.0");
});

