
import { match } from 'react-router-dom';
import { History, Location, Path,LocationDescriptorObject } from 'history';

export interface BaseContainerPageProps<T>{
    match: match<T>;
    history: BaseHistory;
    location : BaseLocation;
}

export interface BaseHistory extends History{
    push<T>(path: Path, state?: T): void;
    push(location: LocationDescriptorObject): void;
}

export interface BaseLocation extends Location{
}
