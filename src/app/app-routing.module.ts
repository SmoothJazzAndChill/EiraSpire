import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AssetsPage } from './pages/assets/assets.page';
import { CharactersPage } from './pages/characters/characters.page';
import { HomePage } from './pages/home/home.page';
import { PagesPage } from './pages/pages/pages.page';
import { SkillsPage } from './pages/skills/skills.page';
import { AuthGuard } from './services/auth.guard';

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
		path: 'assets',
		component: AssetsPage,
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
