import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, ListRenderItem, Text, TextInput, View} from 'react-native';
import _ from 'lodash';

import {Recipe} from '../../../redux/services';
import {PressableScaleCard, RecipeCard} from '../../../shared/ui';
import {COLORS} from '../../../shared/styles';

import {styles} from './style';

interface RecipesModuleProps {
  data: Recipe[];
  onRecipePress(uuid: string): void;
}

export const RecipesModule: React.FC<RecipesModuleProps> = ({
  data,
  onRecipePress,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [filterData, setFilterData] = useState(data);

  const handleSearch = useCallback(
    (text: string) => {
      setFilterData(data.filter(item => item.name.includes(text)));
    },
    [data],
  );

  const updateQuery = useCallback(
    () => handleSearch(searchValue),
    [handleSearch, searchValue],
  );

  const delayedFilter = useMemo(
    () => _.debounce(updateQuery, 500),
    [updateQuery],
  );

  const renderItem: ListRenderItem<Recipe> = ({item}) => {
    const onPress = () => onRecipePress(item.uuid);
    return (
      <PressableScaleCard onPress={onPress}>
        <RecipeCard recipe={item} />
      </PressableScaleCard>
    );
  };

  useEffect(() => {
    delayedFilter();
    return delayedFilter.cancel;
  }, [searchValue, delayedFilter]);

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.sortingText}>sort by</Text>
        <Text style={styles.headerTitle}>Recipes</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={searchValue}
            onChangeText={setSearchValue}
            placeholder="Search"
            placeholderTextColor={COLORS.manatee}
            clearButtonMode="while-editing"
          />
        </View>
      </View>

      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={filterData}
        keyExtractor={item => item.uuid}
        renderItem={renderItem}
      />
    </>
  );
};
