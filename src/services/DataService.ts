import { Space } from "../model/Model";

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push({
      location: "Paris",
      name: "Best location",
      spaceId: "123",
    });
    result.push({
      location: "Paris2",
      name: "Best location2",
      spaceId: "124",
    });
    result.push({
      location: "Paris3",
      name: "Best location3",
      spaceId: "125",
    });
    return result;
  }

  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    if (spaceId === "123") {
      return "5555";
    } else {
      return undefined;
    }
  }
}
