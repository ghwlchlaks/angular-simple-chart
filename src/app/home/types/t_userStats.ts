export interface IReturnStats {
    'status': boolean;
    'value': IUserStats;
}

export interface IUserStats {
        'platforms': Array<String>;
        'seasons': Array<String>;
        '_id': String;
        'uid': String;
        'username': String;
        'cached': boolean;
        'platform': String;
        'timestamp': String;
        'window': String;
        'stats': IStats;
        'totals': ITotals;
        'lastupdate': String;
        '__v': Number;
}

interface IStats {
        'kills_solo': Number;
        'placetop1_solo': Number;
        'placetop10_solo': Number;
        'placetop25_solo': Number;
        'matchesplayed_solo': Number;
        'kd_solo': Number;
        'winrate_solo': Number;
        'score_solo': Number;
        'minutesplayed_solo': Number;
        'lastmodified_solo': String;
        'kills_duo': Number;
        'placetop1_duo': Number;
        'placetop5_duo': Number;
        'placetop12_duo': Number;
        'matchesplayed_duo': Number;
        'kd_duo': Number;
        'winrate_duo': Number;
        'score_duo': Number;
        'minutesplayed_duo': Number;
        'lastmodified_duo': String;
        'kills_squad': Number;
        'placetop1_squad': Number;
        'placetop3_squad': Number;
        'placetop6_squad': Number;
        'matchesplayed_squad': Number;
        'kd_squad': Number;
        'winrate_squad': Number;
        'score_squad': Number;
        'minutesplayed_squad': Number;
        'lastmodified_squad': String;
}

interface ITotals {
        'kills': Number;
        'wins': Number;
        'matchesplayed': Number;
        'minutesplayed': Number;
        'hoursplayed': Number;
        'score': Number;
        'winrate': Number;
        'kd': Number;
        'lastupdate': String;
}
