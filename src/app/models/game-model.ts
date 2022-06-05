export interface GameModel {
    id: string;
    img_path: string;
    json_path: string;
    title: string;
    subtitle: string;
    rating: number;
    hltb_main: string;
    hltb_extra: string;
    synopsis: string;
    summary: string;
    positive_main: string;
    positive_list: string[];
    negative_main: string;
    negative_list: string[];
    notes: string[];
    date_added: string;
    developers: string;
    platforms: string[];
}

export interface GameListModel extends Array<GameModel>{}

export function defaultGameModelEntity(): GameModel {
    return {
        id: "",
        json_path: "assets/games/games-json/",
        img_path: "assets/games/games-pictures/",
        title: "",
        subtitle: "",
        rating: 0,
        hltb_main: "",
        hltb_extra: "",
        synopsis: "",
        summary: "",
        positive_list: [],
        positive_main: "",
        negative_list: [],
        negative_main: "",
        notes: [],
        date_added: "",
        developers: "",
        platforms: []
      };
}