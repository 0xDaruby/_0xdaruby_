import assert from "node:assert/strict";
import test from "node:test";
import { createStructuredData, SITE_URL } from "../src/constants/seo.js";
import { projects } from "../src/data/data.js";

test("structured data connects the profile identity and official accounts", () => {
  const graph = createStructuredData()["@graph"];
  const person = graph.find((entry) => entry["@type"] === "Person");
  const profile = graph.find((entry) => entry["@type"] === "ProfilePage");

  assert.equal(person.name, "David Iquaibom");
  assert.equal(person.alternateName, "0xdaruby");
  assert.equal(person.url, SITE_URL);
  assert.deepEqual(person.sameAs, [
    "https://github.com/0xdaruby",
    "https://twitter.com/0xdaruby",
    "https://www.instagram.com/0xdaruby",
  ]);
  assert.equal(profile.mainEntity["@id"], person["@id"]);
});

test("structured data represents each listed project as created by the profile", () => {
  const graph = createStructuredData()["@graph"];
  const person = graph.find((entry) => entry["@type"] === "Person");
  const projectRecords = graph.filter((entry) =>
    ["SoftwareApplication", "CreativeWork"].includes(entry["@type"])
  );

  assert.equal(projectRecords.length, projects.length);

  for (const project of projects) {
    const record = projectRecords.find((entry) => entry.name === project.name);
    assert.ok(record, `missing structured data for ${project.name}`);
    assert.equal(record.description, project.desc.trim());
    assert.equal(record.url, project.link);
    assert.equal(record.creator["@id"], person["@id"]);
    assert.equal(record.keywords, project.lang.trim());
  }
});