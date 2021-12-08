import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
   
    {id:1,playingDate:new Date(2021,8,10),HomeTeam: 'RRQ',AwayTeam:'EVOS',HomeScore:3,AwayScore:2,RefName:'Udin',notes:'EVOS Win'},
    {id:2,playingDate:new Date(2021,8,11),HomeTeam: 'GPX',AwayTeam:'AURA',HomeScore:4,AwayScore:2,RefName:'Rocky',notes:'AURA Win'},
    {id:3,playingDate:new Date(2021,8,13),HomeTeam: 'BTR',AwayTeam:'ONIC',HomeScore:2,AwayScore:4,RefName:'David',notes:'BTR Win'},
    {id:4,playingDate:new Date(2021,8,14),HomeTeam: 'RRQ',AwayTeam:'GPX',HomeScore:2,AwayScore:4,RefName:'James',notes:'GPX Win'},
    {id:5,playingDate:new Date(2021,8,15),HomeTeam: 'RRQ',AwayTeam:'BTR',HomeScore:2,AwayScore:3,RefName:'Jack',notes:'ONIC Win'},
]

export const TEAMS:Team [] = [
    {id:1,name:'EVOS',type:'Over 30'},
    {id:2,name:'RRQ',type:'Over 30'},
    {id:3,name:'GPX',type:'Over 30'},
    {id:4,name:'ONIC',type:'Over 30'},
    {id:5,name:'BTR',type:'Over 30'},
    {id:6,name:'AURA',type:'Over 30'},
]