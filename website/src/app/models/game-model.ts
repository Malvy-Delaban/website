export interface GameModel {
    id: string;
    img_path: string;
    json_path: string;
    title: string;
    subtitle: string;
    note: number;
    hltb_main: string;
    hltb_extra: string;
    synopsis: string;
    summary: string;
}

export interface GameListModel extends Array<GameModel>{}