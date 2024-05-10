import { Injectable, EventEmitter } from '@angular/core';

export interface DataSource {
  name: string;
  displayName: string;
  color: string;
  background: string;
  isDefault?: boolean;
  cssName: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataSourceStorageService {
  static storageKey = 'shared-data-source-storage-current-name';

  onDataSourceUpdate: EventEmitter<DataSource> = new EventEmitter<DataSource>();
  storeSource(source: DataSource) {
    try {
      window.localStorage[DataSourceStorageService.storageKey] = source.name;
    } catch (e) {
      console.error('Failed to store data source', e);
    }
    this.onDataSourceUpdate.emit(source);
  }

  getStoredSource(): string | null {
    try {
      return window.localStorage[DataSourceStorageService.storageKey] || '';
    } catch {
      return null;
    }
  }

  clearStoredSource() {
    try {
      delete window.localStorage[DataSourceStorageService.storageKey];
    } catch (e) {
      console.error('Failed to clear stored data source', e);
    }
  }
}
