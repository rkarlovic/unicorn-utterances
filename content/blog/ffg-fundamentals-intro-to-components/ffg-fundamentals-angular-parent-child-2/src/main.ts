import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
	selector: "file",
	standalone: true,
	template: `
		<div>
			<a href="/file/file_one">File one<span>12/03/21</span></a>
		</div>
	`,
})
export class FileComponent {}

@Component({
	selector: "file-list",
	standalone: true,
	imports: [FileComponent],
	template: `
		<ul>
			<li><file /></li>
		</ul>
	`,
})
export class FileListComponent {}

bootstrapApplication(FileListComponent);
