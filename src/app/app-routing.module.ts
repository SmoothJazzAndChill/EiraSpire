import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CharactersPage } from './pages/characters/characters.page';
import { HomePage } from './pages/home/home.page';
import { PagesPage } from './pages/pages/pages.page';
import { SettingsPage } from './pages/settings/settings.page';
import { SkillsPage } from './pages/skills/skills.page';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		component: HomePage
	},
	{
		path: 'characters',
		component: CharactersPage
	},
	{
		path: 'pages',
		component: PagesPage
	},
	{
		path: 'skills',
		component: SkillsPage
	},
	{
		path: 'settings',
		component: SettingsPage
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
