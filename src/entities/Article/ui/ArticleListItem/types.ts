import { HTMLAttributeAnchorTarget } from 'react';

import { ArticleView } from '../../model/const/const';
import { Article } from '../../model/types/article';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}
