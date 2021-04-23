import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { ItemArticle } from "./ItemArticle"
import { AddArticle } from "./AddArticle"
import { addArticle, removeArticle } from "../../store/article/actionCreators"
import { Dispatch } from "redux"

export const Article: React.FC = () => {
	const articles: readonly IArticle[] = useSelector(
		(state: ArticleState) => state.articles,
		shallowEqual
	)

	const dispatch: Dispatch<any> = useDispatch()

	const saveArticle = React.useCallback(
		(article: IArticle) => dispatch(addArticle(article)),
		[dispatch]
	)

	return (
		<main>
			<h1>My Articles</h1>
			<AddArticle saveArticle={saveArticle} />
			{articles.map((article: IArticle) => (
			<ItemArticle
				key={article.id}
				article={article}
				removeArticle={removeArticle}
			/>
			))}
		</main>
	)
}