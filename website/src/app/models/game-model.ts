export interface GameModel {
    id: string;
    img_path: string;
    json_path: string;
    title: string;
    subtitle: string;
    note: number;
}

export interface GameListModel extends Array<GameModel>{}