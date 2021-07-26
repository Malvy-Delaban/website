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